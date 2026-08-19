export default function GuideVideo({ videoId }) {
  return (
    <div className="guide-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Crop Monitoring Guide"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}