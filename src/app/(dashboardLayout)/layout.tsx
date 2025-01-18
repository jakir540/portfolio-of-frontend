const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen max-w-7xl mx-auto">
      <main className="h-screen">{children}</main>
    </div>
  );
};

export default DashboardLayout;
