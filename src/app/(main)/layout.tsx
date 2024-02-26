import Footer from "@/components/Footer/Footer"

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
