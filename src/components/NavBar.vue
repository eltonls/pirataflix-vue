

    <!-- <div class="flex bg-darkgrey text-white h-16 font-montserrat px-8 pt-3 items-center justify-between font-medium text-sm">
        <nav class="flex gap-5">

            <RouterLink :to="'/'"> <img src="https://pirataflix.netlify.app/static/media/logo.dc3d4eba.png" alt="Logo PirataFlix" class="h-8 w-8"></RouterLink>
            <RouterLink :to="'/'" class="pl-2"> Home</RouterLink>
            <RouterLink :to="'/films'"> Filmes</RouterLink>
            <RouterLink :to="'/series'"> Series</RouterLink>
        </nav>

        <i class="pi pi-heart-fill text-red-600 h-8 w-8 right-4 flex right-0 top-0" style="font-size: 22px;"></i>
    </div> -->

    <template>
    <div >
        <Menubar :model="items" class="!rounded-none !border-0 h-16 !bg-darkgrey " >
            <template #start  >
                <RouterLink :to="'/'"> <img src="../assets/images/logo.dc3d4eba.png" alt="Logo PirataFlix" class="h-8 w-8 mx-5"></RouterLink>
  
            </template>
            <template #item="{ item }"  >
                <a  class="  flex items-center gap-5 " >
                    <span :class="getItemClass(item)" class= "cursor-pointer ml-3 mr-5 !text-white text-sm	font-montserrat  ">{{ item.label }}</span>
                </a>
            </template>
            <template #end>
                <i class="pi pi-heart-fill text-red-600 h-8 w-8 right-4 flex right-0 top-0" style="font-size: 22px;"></i>
            
            </template>
        </Menubar>
    </div>
</template>


<script lang="ts">
import Menubar from 'primevue/menubar';


export default {
    computed: {
    currentRoute() {
      return this.$route.fullPath;
    }
  },
  methods:{
    getItemClass(item:object) {
        
      return this.currentRoute === item.route ? 'font-bold' : 'font-medium	';
    }
  },
    components:{
        Menubar
    },
    data() {
        return{
             items : [

             {label: 'Home',
             route:'/',
             command: () => {
                        this.$router.push('/');
                    }
             },
             {label: 'Filmes',
             route:'/films',
             command: () => {
                        this.$router.push('/films');
                    }
             },
             {label: 'Séries',
             route:'/series',
             command: () => {
                        this.$router.push('/series');
                    }
             }
            ]

        }
     
        
},


}
</script>
