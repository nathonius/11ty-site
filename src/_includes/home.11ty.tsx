import type { FunctionComponent } from "preact";
import type { TSXProps } from "../../11ty";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Base from "./base.11ty";

export const Home: FunctionComponent<Partial<TSXProps>> = (props) => {
  const { title, content, page, children } = props;
  return (
    <Base title={title} stylesheets={["/root.css"]}>
      <div class="flex flex-col items-center">
        <Header url={page?.url ?? ""} />
        <main class="prose m-2 min-w-[65ch]">
          {!children && (
            <div dangerouslySetInnerHTML={{ __html: content ?? "" }}></div>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </Base>
  );
};

export default Home;
