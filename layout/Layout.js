import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Food App Express" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl: 1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl: 4/5 h-screen overflow-y">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
}
