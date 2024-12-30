document.addEventListener('alpine:init', async () => {
    Alpine.data('crudTable', () => ({
        items: [],
        id: 1,
        name: "",
        cost: 0,
        totalCost: 0,
        editToggle: false,

        addItem(){
            item = {id: this.id,name: this.name, cost: this.cost, showInput: false},
            this.totalCost = parseFloat(this.totalCost) + parseFloat(this.cost),
            this.name = "",
            this.cost = 0,
            this.id++,

            this.items.push(item)
            console.log(item)
        },

        deleteItem(id){
            deleteIndex = this.items.findIndex((item) => item.id == id)
            if (deleteIndex > -1) { 
                this.totalCost = parseFloat(this.totalCost) - parseFloat(this.items[deleteIndex].cost);
                this.items.splice(deleteIndex, 1); 
            }
        },
        
        showInput(id){
            editIndex = this.items.findIndex((item) => item.id == id)
            if (editIndex > -1) {
                this.items[editIndex].showInput = !this.items[editIndex].showInput
                this.editToggle = !this.editToggle
            }
        }

    }))
})