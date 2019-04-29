$(function() {
    var Q = window.Q = Quintus()
                       .include('Input, Sprites, Scenes, SVG')
                       .svgOnly()
                       .setup('quintus', {maximize: true});

    Q.scene('level', new Q.Scene(function(stage) {
        
        stage.insert(new Q.Sprite({
            w: 100, h: 250, x: 500, y: 50
        }));

        stage.insert(new Q.Sprite({
            w: 30, h: 20, x: 0, y: 100
        }));

        stage.insert(new Q.Sprite({
            r: 30, x: 50, y: 100, shape: 'circle'
        }));        

        stage.insert(new Q.Sprite({
            x: 120, y: 100, shape: 'polygon', color: "red",
            points: [[0, 0], [100, 0], [120, 25], [50, 50]]
        }));

        stage.viewport(400, 400);
        stage.centerOn(100, 200);

        $(Q.wrapper).on('touchstart', function(e) {
            var touch = e.originalEvent.changedTouches[0];
            if(touch.target.sprite) {
                touch.target.sprite.destroy();
            }
            else {
                var point = stage.browserToWorld(touch.pageX, touch.pageY);
                var box = stage.insert(new Q.Sprite({
                    x: point.x, y: point.y, w: 20, h: 20
                }));
            }
            e.preventDefault();
        });
    }));
    Q.stageScene("level");
});