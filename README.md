# Random String

        RandomString(number||"pattern")

        --- pattern character map ---
        l = LowerCase Character
        u = UpperCase Character
        h = Hex Character
        n = Numeric Character
        x = Any Character

        ** Passing non mapped characters in the patten will return them unchanged
        ** So... "hello" could become "5erko"

        RandomString(8) //create a string of 8 characters from the full set
        RandomString("xxx") //three random from full set
        RandomString("uuuu") //four random UpperCase
        RandomString("lllll") //five random LowerCase
        RandomString("nn") //2 random Numeric
        RandomString("hhhh") //four random Hex
        RandomString("huunx") //Hex follwed by 2 UpperCase followed by a Numeric followed by any char from the full set.
        RandomString("(nnn) nnn-nnnn") //create a random phone number
        RandomString("hhhhhhhh-hhhh-4hhh-hhhh-hhhhhhhhhhhh") //create a GUID

        **Base 60 character set ( [0-9a-zA-Z] with Capital O and LowerCase l removed for clarity )