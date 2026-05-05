const Shimmer = () => {
  const placeholders = Array.from({ length: 9 }, (_, i) => i);
  return (
    <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-3">
      {placeholders.map((i) => (
        <div
          key={i}
          className="min-h-[200px] animate-pulse rounded-xl border border-slate-200 bg-slate-200/80 dark:border-slate-700 dark:bg-slate-800"
        />
      ))}
    </div>
  );
};

export default Shimmer;
