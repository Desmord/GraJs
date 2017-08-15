# GraJs

@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* reguły aplikowane są dostępne, niezależnie czy przeglądarka obsługuje wersja z przedrostkami czy bez */
}


#container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#pause {
    width: 90vh;
    height: 80vh;
    background-color: #d17d7d;
    display: none;
}

#mainBoard {
    width: 90vw;
    height: 80vh;
    background-color: #d17d7d;
    float: none;
}

#score {
    background-color: #56ad8f;
    width: 45vw;
    height: 5vh;
    @include Czcionki();
    flex-direction: row;
}

#startStopButton {
    width: 45vw;
    height: 5vh;
    background-color: #596aa2;
    @include Czcionki();
    flex-direction: row;
}

#startStopButton:hover {
    cursor: pointer;
    background-color: #315793;
}

@media all and (max-width: 480px) {
    #score {
        font-size: $fs*0.7;
    }
    #startStopButton {
        font-size: $fs*0.8;
    }
    #copyR {
        font-size: $fs*0.8;
    }
}