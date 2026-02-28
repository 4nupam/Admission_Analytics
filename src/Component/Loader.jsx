export default function Loader({ text = "Loading analytics..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-gray-600 text-sm font-medium">{text}</p>
    </div>
  );
}