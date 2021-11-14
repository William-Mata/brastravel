Algoritmo "Agencia de viagens - Recode Pro"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Guanabara o brabo tem nome. *-*
// Descrição   : Cadastra clientes, destinos e realiza a consulta desses.
// Autor(a)    : WILLIAM DE MATA DA SILVA - RECODE PRO
// Data atual  : 19/10/2021
Var
   // Seção de Declarações das variáveis
   aux, auxCad, auxDes, i : inteiro
   clientes : vetor [1..5] de caractere
   destinos : vetor [1..5] de caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   i <- 1
   auxDes <- 1
   auxCad <- 1
   Escreval("##### BEM-VINDOS AO MENU DA AGENCIA DE VIAGENS RECODE ####")

   repita

      Escreval()
      Escreval("===== Escolha uma das opções abaixo =====")
      Escreval("1 - Cadastra Cliente: ")
      Escreval("2 - Consulta Cliente: ")
      Escreval("3 - Cadastra Destino: ")
      Escreval("4 - Consulta Destino: ")
      Escreval("5 - Sair do Menu: ")
      Leia(aux)

      // Cadastra os clientes.
      se(aux = 1)entao
         i <- auxCad
         Escreval()
         Escreval("Bem vindo ao cadastro de cliente!!!")

         enquanto i <= 5 faca
            se(clientes[i] = "") entao
               Escreva("Digite seu nome : ")
               Leia(clientes[i])

               Escreval("Sr(a) ", clientes[i], " foi cadastrado com sucesso.")
               i <- 6;

            fimse

         fimenquanto

         se(auxCad > 5) entao
            Escreval("Sr(a) cliente, infelizmente não há mais vagas.")
         fimse

         auxCad <- auxCad + 1


      senao
         // Consulta os clientes cadastrados.
         se(aux = 2)entao
            Escreval()
            Escreval("Bem vindo a consulta de clientes!!!")

            para i de 1 ate 5 faca

               se(clientes[i] <> "") entao
                  Escreval(i,"° Cliente: ", clientes[i])
               fimse

            fimpara


         senao
          // Cadastra os destinos.
            se(aux = 3) entao
               i <- auxDes
               Escreval()
               Escreval("Bem vindo ao cadastro de novos destinos!!!")

               enquanto i <= 5 faca
                  se(destinos[i] = "") entao
                     Escreva("Digite o nome do destino: ")
                     Leia(destinos[i])

                     Escreval("O ", destinos[i], " foi cadastrado com sucesso.")
                     i <- 6;

                  fimse

               fimenquanto


               se(auxDes > 5) entao
                  Escreval("Infelizmente você chegou ao limite da quantidade de destinos.")
               fimse

               auxDes <- auxDes + 1

            senao
             // Consulta os destinos cadastrados.
               se(aux = 4) entao
                  Escreval()
                  Escreval("Bem vindo a consulta de destinos!!!")

                  para i de 1 ate 5 faca

                     se(destinos[i] <> "") entao
                        Escreval(i,"° Destino: ", destinos[i])
                     fimse

                  fimpara

               senao
                // Finaliza o programa.
                  se(aux = 5)entao

                     Escreval("O programa esta sendo encerrado...")
                     aux <- 5
                  senao
                     Escreval("Opção invalida, digite novamente.")
                  fimse
                  
               fimse
            fimse
         fimse
      fimse
   ate(aux = 5)
   
   Escreval("O programa foi encerrado com sucesso!")

Fimalgoritmo