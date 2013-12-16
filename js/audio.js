var AudioPlayer = function () {
    
    var dh = {
        _audio: null,
        Play: function(url) {
            if (this._audio) {
                this._audio.pause();
            }

            var audio = new window.Audio(url);
            audio.addEventListener('ended', function () {
                setTimeout(function () { audio.play(); }, 500);
            }, false);
            
            this._audio = audio;
            
            setTimeout(function() {
                audio.play();
            }, 0);
        },
        
        // rate range 1 to 100
        ChangePlayback: function (rate) {
            if (this._audio) {
                this._audio.playbackRate = 0.5 + (rate / 100);
                //this._audio.playbackRate = 0.5 + (rate * 2.5 / 100);
            }
        }
    };
    
    return dh;
}();