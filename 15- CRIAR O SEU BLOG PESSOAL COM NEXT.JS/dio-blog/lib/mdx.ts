export interface FrontMatter {
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  [key: string]: any;
}

export interface Post {
  slug: string;
  frontmatter: FrontMatter;
  content: string;
  readingTime: number;
}

export const parseFrontmatter = (content: string): { frontmatter: FrontMatter; content: string } => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!match) {
    return {
      frontmatter: {
        title: 'Sem Título',
        date: new Date().toISOString().split('T')[0],
      },
      content,
    };
  }

  const [, frontmatterStr, body] = match;
  const frontmatter: FrontMatter = {
    title: 'Sem Título',
    date: new Date().toISOString().split('T')[0],
  };

  frontmatterStr.split('\n').forEach((line) => {
    if (line.trim()) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      
      if (key.trim()) {
        try {
          // Tenta parsear JSON arrays/objects
          if (value.startsWith('[') || value.startsWith('{')) {
            frontmatter[key.trim()] = JSON.parse(value);
          } else if (value === 'true' || value === 'false') {
            frontmatter[key.trim()] = value === 'true';
          } else {
            frontmatter[key.trim()] = value;
          }
        } catch {
          frontmatter[key.trim()] = value;
        }
      }
    }
  });

  return { frontmatter, content: body };
};

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
