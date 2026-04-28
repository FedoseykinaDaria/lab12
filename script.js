var calculator = new Vue({
    el: "#app",
    data: {
        countries:[
            {
                country: 'Россия',
                rent: 400,
                food: 200,
                transport: 50,
                entertainment: 150                 
            },
            {
                country: 'США',
                rent: 1200,
                food: 400,
                transport: 100,
                entertainment: 300                 
            },
            {
                country: 'Япония',
                rent: 900,
                food: 350,
                transport: 70,
                entertainment: 250                 
            },
            {country: 'Германия',
                rent: 800,
                food: 300,
                transport: 80,
                entertainment: 200
            },
            {country: 'Китай',
                rent: 500,
                food: 150,
                transport: 30,
            entertainment: 100
            },
        ],

        calculation_states:[
            {state: "rent", name: "Аренда"},
            {state: "food", name: "Питание"},
            {state: "transport", name: "Транспорт"},
            {state: "entertainment", name: "Развлечения"}
        ],

        calculation_data:{
            selected_country:'',
            selected_states: []
        },

        log: '',
        error_message: '',
        message_logs:[],
        travel_sum: 0
    },

    methods:{
        main(){
            if(this.validation()){
                this.calculation_travel();
    
                this.add_log();
            }
        },

        validation(){
            if (this.calculation_data.selected_country == ''){
                this.error_message = "Кажется, вы забыли выбрать страну для путешествия. Попробуйте ещё раз";
                return false;
            }
            else if(this.calculation_data.selected_states.length == 0){
                this.error_message = "Список статей ваших будущих расходов пуст. Поставьте галочки в местах, которые хотите добавить в счёт";
                return false;
            }
            else{
                return true;
            }
        },

        calculation_travel() {
            this.log = this.log + this.calculation_data.selected_country + " | ";
            for (obj of this.countries){
                if (obj.country == this.calculation_data.selected_country){
                    for (counting_state of this.calculation_data.selected_states){
                        this.travel_sum += obj[counting_state];
                    }
                }
            }
        },

        add_log(){
            for (obj of this.calculation_states){
                for (counting_state of this.calculation_data.selected_states){
                    if (obj.state == counting_state){
                        this.log = this.log + obj.name + " ";
                    }
                }
            }
            this.log = this.log + "| " + this.travel_sum.toString();
            
            this.message_logs.push(this.log);
            if (this.message_logs.length > 10){
                this.message_logs.shift();
            }
            this.log = '';
        },

        clean_logs(){
            this.message_logs = [];
            this.travel_sum = 0;
        }
    }
});