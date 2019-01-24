AFRAME.registerComponent('markers', {
    init: function () {
        var scene = document.getElementsByTagName('a-scene')[0];
        var i = 0;
        var j = 0;
        var hash = ["-26.16 .01 ","26.16 .01 ","-3.16 .01 ","3.16 .01 "];

        for(i=-50; i<51; i++) {
            if (Math.abs(i)%5) {
                // Create Hash Lines
                for(j=0; j<4; j++) {
                    scene.appendChild(this.createMarkerEntity("marker", hash[j] + i, 1));
                }
            } else {
                // Create Full line
                scene.appendChild(this.createMarkerEntity("marker", "0 .01 " + i, 53.33));
            }
        }
    },
    createMarkerEntity: function(mixin, position, width) {
        var entity = document.createElement('a-entity');
        entity.setAttribute('mixin', mixin);
        entity.setAttribute('position', position);
        entity.setAttribute('geometry', "width: " + width);
        return entity;
    }
  });