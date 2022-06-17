import { TypeProduto } from "./ShowPrincipaisProdutosInterface";

export interface NavProdutosInterface {
  setProdutoAtual: (value: TypeProduto) => void;
  setSlidePosition: (num: number) => void;
  setMoveSlide: (num: number) => void;
}
