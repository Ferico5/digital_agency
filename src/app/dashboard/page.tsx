import { auth } from '@clerk/nextjs/server';
import { getUserBlogs } from '@/prisma';
import DashboardContent from '@/components/DashboardContent/DashboardContent';

const DashboardPage = async () => {
  const { userId } = await auth();
  if (!userId) return <p className="text-red-500">Unauthorized</p>;

  const blogs = await getUserBlogs(userId);

  return <DashboardContent blogs={blogs} userId={userId!} />;
};

export default DashboardPage;
