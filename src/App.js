import { Stack } from "@chakra-ui/react";
import { useGlobalState } from "./Hooks/Contexts";
import Layout from "./Layouts";
import AuthRouter from "./Router/AuthRouter";
import MainRouter from "./Router/MainRouter";

function App() {
  const globalState = useGlobalState()
console.log(globalState)


  return (
    <Stack>
      {globalState.isLoggedin ? (
        <Layout>
          <MainRouter />
        </Layout>
      ) : (
        <AuthRouter />
      )}
    </Stack>
  );
}

export default App;
