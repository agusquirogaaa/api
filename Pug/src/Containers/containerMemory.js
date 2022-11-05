class containerMemory {
    constructor() {
        this.elementos = [];
    }

    getAll() {
        return this.elementos;
    }
    save(elemento) {
        elemento.id = this.elementos.length === 0
         ? 1 
         : this.elementos[this.elementos.length].id + 1;
        
        this.elementos.push(elemento)
        return elemento;
    }
    getById(id) {
        return this.elementos.find((elemento) => elemento.id === id)
    }
    updateById(id, newData) {
        const elementoIndex = this.elementos.findIndex((elemento) => elemento.id === id)
        if(elementoIndex === -1) return { error: true}

        
        

        for (const key in newData) {
            if (this.elementos[key]) {
                this.elementos[key] = newData[key]
            }
        }
        return this.elementos[elementoIndex]
    }

    deleteById(id) {
        this.elementos.filter(elemento => elemento.id != id)
        return {success: true}
    }
} 

export {containerMemory};
