export type TypeProduto =
  | "fone"
  | "iphone"
  | "notebook"
  | "computador"
  | "controle";

export interface ShowPrincipaisProdutosInterface {
  produtoAtual: TypeProduto;
  slidePosition: number;
  setSlidePosition: (num: React.SetStateAction<number>) => void;
  moveSlide: number;
  setMoveSlide: (num: React.SetStateAction<number>) => void;
}

export interface ProdutoInterface {
  name: string;
  description: string;
  price: string;
  pictures: Array<any>;
}

export interface ButtonFotoAtualInterface {
  backgroundColor?: string;
}

export interface FotoProdutoPrincipalInterface {
  backgroundFoto: string;
}

export interface ContainerFotosProdutosInterface {
  moveSlide: number;
}
