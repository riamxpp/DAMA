export function mudaSlideAoClick(
  position: number,
  slidePosition: number,
  setMoveSlide: (value: React.SetStateAction<number>) => void,
  containerFotoRef: React.RefObject<HTMLDivElement>,
  setSlidePosition: React.Dispatch<React.SetStateAction<number>>
) {
  console.log(containerFotoRef.current?.offsetHeight);
  let diferencaDeSlide = 0;
  if (position > slidePosition) {
    diferencaDeSlide = position - slidePosition;
    setMoveSlide(
      (prev) =>
        (prev -=
          diferencaDeSlide * Number(containerFotoRef.current?.offsetWidth))
    );
  } else if (position < slidePosition) {
    diferencaDeSlide = slidePosition - position;

    setMoveSlide(
      (prev) =>
        (prev +=
          diferencaDeSlide * Number(containerFotoRef.current?.offsetWidth))
    );
  }
  setSlidePosition(position);
}
