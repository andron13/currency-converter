interface PictureWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}
function PictureWithCaption({ src, alt, caption }: PictureWithCaptionProps) {
  return (
    <div className="flex flex-col items-center">
      <picture>
        <source srcSet={src} type="image/webp" />
        <img src={src} alt={alt} className="w-64" />
      </picture>
      <p className="text-center mt-2 text-gray-500">{caption}</p>
    </div>
  );
}

export default PictureWithCaption;
