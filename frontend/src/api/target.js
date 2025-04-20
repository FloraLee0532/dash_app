import { request }  from "@/utils/request";
export async function fetchData(params) {
    return 1
}
/*** 
export default {
    
    async fetchData(params){
        
        let url = '/api/test';
        return await request(url,params,"GET")
        
       return 1
    },
    async testtest(params){
        let url = '/api/test';
        return await request(url,params,"GET")
    },
    async get_grid_role(params){
        let url = '/api/get_grid_role';
        return await request(url,params,"GET")
    },
    async get_class_distribution(params){
        let url = '/api/get_class_distribution';
        return await request(url,params,"GET")
    },
    async get_tech_all_hour(params){
        let url = '/api/get_tech_all_hour';
        return await request(url,params,"GET")
    },
    async get_sd_all_task(params){
        let url = '/api/get_sd_all_task';
        return await request(url,params,"GET")
    },
    async get_lilun_shiji_ratio(params){
        let url = '/api/get_lilun_shiji_ratio';
        return await request(url,params,"GET")
    },
    async get_high_frequent_assay(params){
        let url = '/api/get_high_frequent_assay';
        return await request(url,params,"GET")
    },
    
    async get_lilun_shiji_ratio_high_frequency(params){
        let url = '/api/get_lilun_shiji_ratio_high_frequency';
        return await request(url,params,"GET")
    },
    async get_single_operation_data(params){
        let url = '/api/get_single_operation_data';
        return await request(url,params,"GET")
    },
    async get_tech_all_hour_classification_bar(params){
        //Section3: 各Grid 不同类型Tech的周均人效统计 bar
        let url = '/api/get_tech_all_hour_classification_bar';
        return await request(url,params,"GET")
    },
    async get_measurement_task_classification(params){
        //Section5: 各Grid Measurement任务中各类时间占比
        let url = '/api/get_measurement_task_classification';
        return await request(url,params,"GET")
    },
    async high_assay_distribition_bar(params){
        //Section5: 各Grid分布情况对比
        let url = '/api/high_assay_distribition_bar';
        return await request(url,params,"GET")
    },
    async get_notarchived(params){
        //Section2: 未归档比例
        let url = '/api/get_notarchived';
        return await request(url,params,"GET")
    },
    async get_development_situation(params){
        //Section4: 未归档比例
        let url = '/api/get_development_situation';
        return await request(url,params,"GET")
    },
    async get_statistic(params){
        //Section4: 未归档比例
        let url = '/api/get_statistic';
        return await request(url,params,"GET")
    },
    async get_basic_info(params){
        //Section4: 未归档比例
        let url = '/api/get_basic_info';
        return await request(url,params,"GET")
    },
    async section2_notfinished_comment(params){
    //#PartE. 各Grid 未归档任务比例comment
    let url = '/api/section2_notfinished_comment';
    return await request(url,params,"GET")
    },
    async section2_task_per_week_info(params){
        //PartA. 各Grid管理宽度和角色构成备注comment
        let url = '/api/section2_task_per_week_info';
        return await request(url,params,"GET")
        },
    async section2_grid_jiagou(params){
        //PartA. 各Grid管理宽度和角色构成备注comment
        let url = '/api/section2_grid_jiagou';
        return await request(url,params,"GET")
    },
    async section3_tech_info(params){
        //PartA. 各Grid 不同类型Tech的周均人效统计comment
        let url = '/api/section3_tech_info';
        return await request(url,params,"GET")
    },
    async section4_sd_info(params){
        //PartA. 各Grid 不同类型SD周均派发任务数统计comment
        let url = '/api/section4_sd_info';
        return await request(url,params,"GET")
    },
    async section4_dev_info(params){
        //PartB. 各Grid 开发类任务完成度和成功率comment
        let url = '/api/section4_dev_info';
        return await request(url,params,"GET")
    },
    async section4_diff_info(params){
        //PartC. 各Grid SD人力使用预估与实际差异统计comment
        let url = '/api/section4_diff_info';
        return await request(url,params,"GET")
    },
}

*/