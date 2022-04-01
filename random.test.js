const random = require('./random.js');


    test("Should generate random number", function() {

         expect(random(9, 20)).toBeGreaterThanOrEqual(9);
         expect(random(9, 20)).toBeLessThanOrEqual(20);
         expect(random(1, 100)).toBeGreaterThanOrEqual(1);
         expect(random(1, 100)).toBeLessThanOrEqual(100);

    });

  