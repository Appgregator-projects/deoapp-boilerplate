import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import Layout from "./Layouts";
import AuthRouter from "./Router/AuthRouter";
import MainRouter from "./Router/MainRouter";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);



  return (
    <Stack>
      {isLoggedin ? (
        <Layout>
          <MainRouter />
        </Layout>
      ) : (
        <AuthRouter />
      )}
    </Stack>
  );

  // return (
  //   <Layout>
  //     <MainRouter />
  //   </Layout>

    
  // );
}

export default App;
