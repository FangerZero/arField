AFRAME.registerComponent('players', {
    init: function () {
        var scene = document.getElementsByTagName('a-scene')[0];
        var offense = ["-16 1.1 -5","-10 1.1 -5","-3 1.1 -5","0 1.1 -5","3 1.1 -5","5 1.1 -8","3 1.1 -12","0 1.1 -10","6 1.1 -5","9 1.1 -5","16 1.1 -5"];
        var defense = ["-16 1.1 -2","-14 1.1 7","-3 1.1 -2","0 1.1 -2","3 1.1 -2","-5 1.1 3","3 1.1 8","15 1.1 -2","6 1.1 -2","8 1.1 2","16 1.1 7"];

        for(i=0;i<offense.length;i++) {
           scene.appendChild(this.createPlayer("o-"+i, "player", offense[i], "red"));
           scene.appendChild(this.createPlayer("d-"+i, "player", defense[i], "gray"));
        }
    },
    createPlayer: function(id, mixin, position, color) {
        var entity = document.createElement('a-entity');
        entity.setAttribute('id', id);
        entity.setAttribute('mixin', mixin);
        entity.setAttribute('position', position);
        entity.setAttribute('material', "color: " + color);
        return entity;
    }
  });