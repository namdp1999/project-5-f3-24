import SongItem from "./SongItem";

export default function SongList(props: { data: any }) {
  const { data } = props;

  return (
    <>
      <div className="grid grid-cols-1 gap-[12px]" song-list="">
        {data.map((item: any, index: number) => (
          <SongItem
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            singer={item.singer}
            listen={item.listen}
            audio={item.audio}
            wishlist={item.wishlist}
          />
        ))}
      </div>
    </>
  )
}