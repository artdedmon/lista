const app = Vue.createApp({
    data() {
        return {
            progreso: 0,
            nuevoItem: '', 
            items: [] 
        };
    },
    computed: {
        estiloBarraProgreso() {
            let color;
            if (this.progreso >= 1 && this.progreso <= 40) {
                color = 'green'; 
            } else if (this.progreso >= 41 && this.progreso <= 70) {
                color = 'yellow'; 
            } else if (this.progreso >= 71 && this.progreso <= 100) {
                color = 'red'; 
            } else {
                color = 'transparent'; 
            }
            return {
                width: this.progreso + '%',
                backgroundColor: color
            };
        },
        totalTareas() {
            return this.items.length; 
        },
        tareasCompletadas() {
            return this.items.filter(item => item.completada).length; 
        }
    },
    methods: {
        aumentarProgreso() {
            if (this.progreso < 100) {
                this.progreso += 1; 
            }
        },
        disminuirProgreso() {
            if (this.progreso > 0) {
                this.progreso -= 1; 
            }
        },
        agregarItem() {
            if (this.nuevoItem.trim() !== '') { 
                this.items.push({ texto: this.nuevoItem, completada: false }); 
                this.nuevoItem = ''; 
            }
        }
    }
});

app.mount('#app');
