// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
    
    function getParent(el) {
        return $(el.context.parentElement);
    }

    let depth = 0;

    $('ul, ol').each(function (i) {

        const self = $(this);
        let root = self;

        let count = 1;
        while (true) {

            root = getParent(root);

            if (root[0].tagName == 'BODY') {
                break;
            }

            if (root[0].tagName == 'UL' || root[0].tagName == 'OL') {
                count++;
            }

        }

        if (count > depth) {
            depth = count;
        }
    });
    
    return depth;
}
