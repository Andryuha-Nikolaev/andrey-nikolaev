import RootButton from "../buttons/RootButton/RootButton"
import LinkIcon from "./_icon/link.svg"
import PdfIcon from "./_icon/pdf.svg"

import s from "./style.module.scss"

const IconList = {
  pdf: PdfIcon,
  link: LinkIcon,
}

const ListItem: React.FC<{
  text: string
  additionalText?: string
  icon: "pdf" | "link"
  actionText: string
}> = ({ text, additionalText, icon, actionText }) => {
  const ItemIcon = IconList[icon]

  return (
    <div className={s["item-card"]}>
      <ItemIcon className={s["item-card__logo"]} />
      <div className={s["item-card__name"]}>
        <b className={s["name"]}>{text}</b> <span>{additionalText}</span>
      </div>
      <div className={s["item-card__link"]}>
        <a href="/#" target="_blank" rel="noreferrer">
          <RootButton withArrow appearance="link" styleVariant="2">
            {actionText}
          </RootButton>
        </a>
      </div>
    </div>
  )
}

export default ListItem
