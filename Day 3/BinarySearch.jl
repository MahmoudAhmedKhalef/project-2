function binary_search(arr, target)
    left = 1
    right = length(arr)
    
    while left <= right
        mid = (left + right) ÷ 2
        
        if arr[mid] == target
            return mid
        elseif arr[mid] < target
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    return -1
end

result = binary_search([1, 3, 4, 6, 8, 9, 11], 6)

if result == -1
    println("Target value was not found in array.")
else
    println("Target value was found at index $result.")
end