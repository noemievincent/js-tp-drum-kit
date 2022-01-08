(function (){
    const oDrumkit={
        init() {
            document.documentElement.classList.add('js-enabled');
            this.eBody = document.body;
            this.aAudios = document.querySelectorAll('audio');
            this.aKeys = document.querySelectorAll('.key');
            this.mapAudios = new Map();
            for (const eAudio of this.aAudios) {
                this.mapAudios.set(eAudio.dataset.key, eAudio);
            }
            this.addEvents();
        },
        addEvents() {
            for (const eKey of this.aKeys) {
                eKey.addEventListener('transitionend', (event) => {
                    event.currentTarget.classList.remove('playing');
                    this.eBody.className = '';
                });
                eKey.addEventListener('click', (event) => {
                    this.fSound(event.currentTarget.dataset.key);
                });
                document.addEventListener('keydown', (event) => {
                    this.fSound(event.key);
                });
            }
        },
        fSound(key){
            if (this.mapAudios.has(key)) {
                this.mapAudios.get(key).currentTime = 0;
                this.mapAudios.get(key).play();
                this.eBody.classList.add(key);
                document.querySelector(`[data-key='${key}']`).classList.add('playing');
            }
        }
    }
    oDrumkit.init();
})();