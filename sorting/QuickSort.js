class QuickSort {

    partition = (arr, low, high) => {
        let pivot = arr[Math.floor((low + high)/2)];
        while(low <= high){
            while(arr[low] < pivot){
                low++;
            }
            while (arr[high] > pivot){
                high--;
            }
            if(low <= high){
                let temp = arr[low];
                arr[low] = arr[high];
                arr[high] = temp;

                low++;
                high--;
            }
        }
        return low;
    }

    sort = (arr, low, high) => {

        let v = this.partition(arr, low, high);
        if(low < v-1){
            this.sort(arr, low, v-1);
        }
        if(v < high){
            this.sort(arr, v, high);
        }
    }
}

const data = [39, 3, 13, 8, 21, 1];
const b = new QuickSort();
b.sort(data, 0, data.length-1);
console.log(data);
