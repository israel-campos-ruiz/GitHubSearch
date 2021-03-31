export const average =  (props) => {
    let total = 0;  
    
    const sum = Object.entries(props).map(([name, value]) =>  total += value)
    const totalSum = sum[sum.length-1];
    const averageChart = Object.entries(props).map(([name,value])=> value = (value *100) / totalSum);
    return averageChart
}