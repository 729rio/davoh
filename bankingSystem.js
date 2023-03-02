var bank = {};
        const deposit = () => {
            var total = 0;
            var name = document.getElementsByName("name")[0].value;
            var money = Number(document.getElementsByName("money")[0].value);
            
            console.log(money);
            console.log(bank);
            total = total + money;

            if (bank[name] == undefined) {
                bank[name] = total;
            } else {
                bank[name] += total;
            }

            document.getElementById("myh1").innerHTML = name + " depositied " + money + " total is " + bank[name];
        
        }

        const withdraw = () => {
            var total = 0;
            var name = document.getElementsByName("name")[0].value;
            var money = Number(document.getElementsByName("money")[0].value);
            
            console.log(money);
            console.log(bank);
            total = total - money;

            if (bank[name] !== undefined) {
                
                if (bank[name] >= money) {
                    bank[name] -= money;
                    document.getElementById("myh1").innerHTML = name + " withdrew " + money + " total is " + bank[name];
                } else {
                    document.getElementById("myh1").innerHTML = "Insufficient balance"
                }
            } else {
                bank[name] = 0;
            }

        }

