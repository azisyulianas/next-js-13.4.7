import Navbar from "../Navbar";

type AppsShellProps = {
  children: React.ReactNode;
}

const AppShell = (props: AppsShellProps) => {
  const {children} = props;
  return(
    <main>
      <Navbar/>
      {children}
    </main>
  )
}

export default AppShell;