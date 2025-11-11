// Типи для зображень
export interface ImageAsset {
  src: string;
  alt: string;
}

// Helper функція для отримання зображення з assets
export const getAssetImage = (imagePath: string): string => {
  try {
    // Vite автоматично обробить імпорт
    return new URL(`../assets/images/${imagePath}`, import.meta.url).href;
  } catch {
    return `/images/${imagePath}`; // fallback до public
  }
};

// Lazy loading зображення з assets
export const importAssetImage = async (imagePath: string): Promise<string> => {
  try {
    const module = await import(`../assets/images/${imagePath}`);
    return module.default;
  } catch {
    return `/images/${imagePath}`;
  }
};

// Компонент для зображення з автоматичним fallback
interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function SmartImage({ 
  src, 
  alt, 
  className = "",
  fallback = "/placeholder.jpg" 
}: SmartImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = fallback;
      }}
    />
  );
}