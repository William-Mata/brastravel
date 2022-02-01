algoritmo "JogoDaVelha"
var
   velha: vetor [1..3, 1..3] de caractere
   w, n ,c, resu: inteiro
   Jg1, Jg2, resp: caractere
Procedimento Tab()
inicio
      Para w:= 1 ate 3 faca
           Escreval("+---","+---","+---+")
           Escreva("|")
           Para n:= 1 ate 3 faca
                Escreva(" ",velha[w,n]," |")
           FimPara
        Escreval()
      FimPara
      Escreval("+---","+---","+---+")
FimProcedimento
Procedimento Test()
Inicio
      Se (velha[1,1] = velha[1,2]) e (velha[1,2] = velha[1,3])entao
         resu <- 1
      FimSE
      Se (velha[2,1] = velha [2,2]) e (velha[2,2] = velha[2,3])entao
         resu <- 1
      FimSe
      Se (velha[3,1] = velha [3,2]) e (velha[3,2] = velha[3,3])entao
         resu <- 1
      FimSe
      Se (velha[1,1] = velha [2,1]) e (velha[2,1] = velha[3,1])entao
         resu <- 1
      FimSe
      Se (velha[1,2] = velha [2,2]) e (velha[2,2] = velha[2,3])entao
         resu <- 1
      FimSe
      Se (velha[1,3] = velha [2,3]) e (velha[2,3] = velha[3,3])entao
         resu <- 1
      FimSe
      Se (velha[1,1] = velha [2,2]) e (velha[2,2] = velha[3,3])entao
         resu <- 1
      FimSe
      Se (velha[1,3] = velha [2,2]) e (velha[2,2] = velha[3,1])entao
         resu <- 1
      FimSe
FimProcedimento
Procedimento Empate()
Inicio
      c <- 1
      Para w:= 1 ate 3 faca
           Para n:= 1 ate 3 faca
                Se(velha[w,n] = "X")entao
                    c <- c + 1
                FimSe
                Se(velha[w,n] = "O")entao
                   c <- c + 1
                FimSe
           FimPara
      FimPara
      Se( resu = 0) e (c = 10)entao
        Escreval("Jogo Deu Velha")
        resu <- 1
      FimSe
FimProcedimento
Procedimento o()
Inicio
      Para w:= 1 ate 3 faca
           Para n:= 1 ate 3 faca
                Se (resp = velha[w,n])entao
                   velha[w,n] <- Jg2
                   resp <- "V"
                FimSe
           FimPara
      FimPara
      Se (resp <> "V")entao
         Escreval("Jogado Invalida")
      FimSe
FimProcedimento
Procedimento x()
inicio
      Para w:= 1 ate 3 faca
           Para n:= 1 ate 3 faca
                Se (resp = velha[w,n])entao
                   velha[w,n] <- Jg1
                   resp <- "V"
                FimSe
           FimPara
      FimPara
      Se (resp <> "V")entao
         Escreval("Jogado Invalida")
      FimSe
FimProcedimento
inicio
      resu <- 0
      Jg1 <- "X"
      Jg2 <- "O"
      velha[1,1] <- "1"
      velha[1,2] <- "2"
      velha[1,3] <- "3"
      velha[2,1] <- "4"
      velha[2,2] <- "5"
      velha[2,3] <- "6"
      velha[3,1] <- "7"
      velha[3,2] <- "8"
      velha[3,3] <- "9"
      Enquanto (resu = 0) faca
            test()
            Tab()
            Repita
                  Limpatela
                  test()
                  Tab()
                  Escreva("Vai Jogar [",Jg1,"] Onde: ")
                  Leia(resp)
                  x()
            Ate resp = "V"
            Empate()
            Escreval()
            Repita
                  LimpaTela
                  test()
                  Tab()
                Se(resu = 0)entao
                  Escreva("Vai Jogar [",Jg2,"] Onde: ")
                  Leia(resp)
                  o()
                FimSe
            Ate resp = "V"
            test()
            Limpatela
      FimEnquanto
      Se (C = 10)Entao
         Escreval("Deu velha")
      FimSe
      Escreval("Fim De Jogo!!!")
      
fimalgoritmo