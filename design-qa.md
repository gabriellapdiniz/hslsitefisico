# Design QA — elementos fornecidos pela usuária

## Referências

- Hero: `codex-clipboard-6d83174c-79c3-4e09-8859-c14f0b05cdd5.png`.
- Introdução: `codex-clipboard-bf8c3713-71da-4e5f-8202-d9f9bd596422.png`.
- Assets originais: `1.png` a `5.png`.

## Comparação visual

- O hero usa a estrela, a fita, a seta laranja e o X enviados pela usuária.
- Todos os assets preservam sua proporção original; somente as margens transparentes foram removidas.
- A seta ocupa o espaço entre a mensagem e o logo, e os três ícones continuam visíveis abaixo dos CTAs.
- A introdução usa o caminho pontilhado entre as duas colunas de texto.
- O destaque de fita foi removido de “acompanhado”, conforme a referência refinada.
- A trilha central foi ampliada em 50% e agora estabelece com mais clareza a ideia de “caminho” entre as duas colunas.
- A trilha foi deslocada 21 px para a esquerda, equivalente a aproximadamente 15% da largura do asset.
- O bloco de texto da direita foi elevado em 56 px no desktop, alinhando o centro visual dos dois conjuntos sem alterar o fluxo no celular.
- O X permanece ao lado da chamada superior.
- Não foram encontrados cortes, distorções ou sobreposições na captura de produção em desktop.
- As regras responsivas existentes reduzem e contêm os elementos em telas estreitas.

## Pendências

- P3: os deslocamentos decorativos podem continuar sendo refinados conforme a preferência visual da usuária.

final result: passed

## Seção de investimento — abas de programas

- Fonte visual: `C:\Users\User\AppData\Local\Temp\codex-clipboard-8d27cdfb-213b-45e3-bfff-99e4d7dd7135.png` (1688 × 932).
- Implementação comparada em desktop na mesma largura da referência; evidências: `work/qa/investment-desktop-section.png` e `work/qa/desktop-comparison-final.png`.
- Estado comparado: aba “INGLÊS” selecionada por padrão.
- A seção preserva a composição da referência: cabeçalho, brilho ciano, três abas, painel marinho, CTA geral e bloco de Combos HSL.
- Psicopedagogia e Acompanhamento/Reforço exibem apenas título, subtítulo, preço e botão, conforme solicitado.
- A navegação por clique e por setas do teclado foi testada; a aba ativa atualiza o painel e mantém foco visível.
- A verificação responsiva foi feita em viewport estreito: painel e combo passam para uma coluna, botões ocupam a largura disponível e as abas permanecem navegáveis por rolagem horizontal intencional.
- Nenhum elemento da seção ultrapassa seu contêiner; o restante da página não foi alterado.
- Iteração visual: a altura desktop foi reduzida de aproximadamente 1109 px para 930 px, aproximando a densidade da referência sem comprimir a leitura.
- Build de produção concluído sem erros.
- Pendências P0, P1 ou P2: nenhuma.

final result: passed

## Seção “Por que a HSL?”

- “Pequena no formato.” permanece menor e contida.
- “Grande no cuidado.” usa escala maior e a cor laranja para materializar a mensagem.
- O arco ciano envolve o título sem atravessar as palavras.
- Colchete, círculo, sinal de mais, onda, pontos, brilho e traço usam ícones reais da mesma família visual.
- A lista de sete diferenciais preserva a hierarquia, os textos e os separadores.
- No celular, os elementos de grande escala são removidos para preservar leitura e comprimento da página.

## Seção de investimento — carrossel

- Referência: `codex-clipboard-8de6bc6c-55d5-4192-a5e5-644c5865da96.png`.
- Escopo restrito à seção `#planos`; demais seções preservadas.
- Inglês aparece selecionado inicialmente no centro, em azul-marinho, com preços e CTA em laranja.
- Psicopedagogia e Acompanhamento permanecem visíveis nas laterais, menores, legíveis e sem blur.
- O card ativo exibe etiqueta “EM DESTAQUE”, todas as opções de preço, três benefícios e CTA.
- Os cards inativos exibem categoria, título, preço inicial e botão “Ver plano”.
- Clique, botões anterior/próximo, teclado e swipe foram testados e aprovados.
- Foco visível, rótulos acessíveis e preferência por movimento reduzido foram implementados.
- Desktop verificado em 1488 × 1058 e celular em 390 × 844.
- A versão publicada não apresentou erros no console.
- Nenhuma pendência P0, P1 ou P2.

final result: passed
