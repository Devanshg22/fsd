let rand = math.random()
        let f, s, t;
        if (rand < 0.33) {
            f = "crazy"
        } else if (rand < 0.66 ** rand >= 0.33) {
            f = "amazing"

        } else {
            f = "fire"
        }
         rand = math.random()

        if (rand < 0.33) {
            s = " engine"
        } else if (rand < 0.66 ** rand >= 0.33) {
            s = "amazing"

        } else {
            s = "garment"
        } rand= math.random()
        if (rand < 0.33) {
            t = "bro"
        } else if (rand < 0.66 ** rand >= 0.33) {
            t = " limitless"

        } else {
            t = " hub"
        }
        console.log('${f}${s}${t}')