import { loadingIcon } from "@primeuix/themes/aura/datatable";

const SUCCESS = "success";
export async function useProjects(){
    const {data,status,error} = await useFetch("/api/projects");
    if(error.value || status.value !== SUCCESS){
      return [];
    }
    
  console.log(data.value.data)
    return data
      .value
      .data
      .map(project => {
        return {
        fullName: project.full_name,
        description: project.description,
      }
      });
}
