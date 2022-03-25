import "./App.css";
import MenuBar from "./components/MenuBar/";
import LatestPosts from "./components/LatestPosts";
import { Container } from "@mantine/core";
import { Group, Button } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { Prism } from "@mantine/prism";

function App() {
  const notifications = useNotifications();
  return (
    <>
      <MenuBar />
      <br />
      <Container>
        <LatestPosts />
      </Container>
      <Group position="center">
        <Button
          variant="outline"
          onClick={() =>
            notifications.showNotification({
              title: "Hello",
              message: "World!!!!🤥",
            })
          }
        >
          Show notification
        </Button>
      </Group>
      <br />
      <Prism language="jsx">let x = "Hello World";</Prism>
    </>
  );
}

export default App;
