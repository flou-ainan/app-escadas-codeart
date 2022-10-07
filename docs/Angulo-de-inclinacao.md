## Como saber o angulo de base da escada ##

Mnemonica = socatoa

Desmontando mnemonica

    SOH
    CAH
    TOA <-


Seno  = Oposto / Hipotenusa

Cosseno = Adjacente / Hipotenusa

Tangente = Oposto / Adjacente   <--

// Temos os cateto oposto(altura) e cateto adjacente(largura)
// como possiveis dados para descobrir nosso angulo.


        |\                               
        |   \                                           
        |      \                                          
        |         \                               
Cateto  |            \
Oposto  |               \
        |                  \                     
        |                     \                      
        |                        \                
        |___________________________\  <--  Tangente deste angulo ⬇️
               Cateto Adjacente

          

➡️ = Cateto Oposto / Cateto Adjacente

// Pseudo código //

CO = altura       // Cateto Oposto
CA = largura     // Cateto Adjacente
AN = angulo     // Angulo da Base inferior da escada em graus
TA = 0         // Tangente de AN
ANrad = 0     // AN em radianos
PI = 3,141592

TA = CO/CA 

ANrad arcotangente(TA)

AN = ANrad x (180/PI)


------- JavaScript : Notes -----

Math.PI -> Valor de PI

Math.atan(x) -> Retorna angulo de uma tangente em radianos








