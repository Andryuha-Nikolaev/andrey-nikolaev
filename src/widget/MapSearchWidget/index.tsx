import s from "./style.module.scss"
import SearchInput from "@/ui/forms/SearchInput/SearchInput"

const MapSearchWidget: React.FC<any> = () => {
  return (
    <div className={s["search-container"]}>
      <SearchInput
        placeholder="Быстрый поиск по адресу/организации"
        containerClassName={s["label"]}
        searchValue={""}
        onSearchClick={() => {}}
      />
    </div>
  )
}

export default MapSearchWidget
