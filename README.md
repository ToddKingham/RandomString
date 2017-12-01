# Random String

        randomString(number||"pattern")

        --- pattern character map ---
        l = LowerCase Character
        u = UpperCase Character
        h = Hex Character
        n = Numeric Character
        x = Any Character

        ** Passing non mapped characters in the patten will return them unchanged
        ** So... "hello" could become "5erko"

        randomString(8) //create a string of 8 characters from the full set
        randomString("xxx") //three random from full set
        randomString("uuuu") //four random UpperCase
        randomString("lllll") //five random LowerCase
        randomString("nn") //2 random Numeric
        randomString("hhhh") //four random Hex
        randomString("huunx") //Hex follwed by 2 UpperCase followed by a Numeric followed by any char from the full set.
        randomString("(nnn) nnn-nnnn") //create a random phone number
        randomString("hhhhhhhh-hhhh-4hhh-hhhh-hhhhhhhhhhhh") //create a GUID

        **Base 60 character set ( [0-9a-zA-Z] with Capital O and LowerCase l removed for clarity )