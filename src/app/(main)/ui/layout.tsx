import type { Metadata } from "next"
import metaConstants from "@/constants/meta/meta"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import Container from "@/common/MainContainer/MainContainer"

export const metadata: Metadata = {
  title: `UI | ${metaConstants.title}`,
}

const linksArr = [
  {
    link: "/ui/texts",
    name: "Тексты",
  },
  {
    link: "/ui/buttons",
    name: "Ссылки и кнопки",
  },
  {
    link: "/ui/forms",
    name: "Формы",
  },
  {
    link: "/ui/elements",
    name: "Элементы",
  },
]

export default function UiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "gainsboro" }}>
      <Container>
        <h1>UI Page</h1>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            margin: "15px 0",
          }}
        >
          {linksArr.map((item) => (
            <li key={`ui-links-key-${item.name}`}>
              <RootButton
                appearance="link"
                styleVariant="2"
                withArrow
                link={item.link}
                textTransform="uppercase"
                role="next-link"
              >
                {item.name}
              </RootButton>
            </li>
          ))}
        </ul>
        {children}
      </Container>
    </div>
  )
}
