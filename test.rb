 # arr = ["a", "b", "c", "d", "e", "f", "g", "h"]
 arr = ["a", "b", "c", "d"]


def make_combos(arr)
  i = 0
  combos = []
  while i < arr.length
    j = i + 1
    while j < arr.length
      combos << [arr[i], arr[j]]
      j += 1
    end
    i += 1
  end
  combos
end

combos =  make_combos(arr)

p combos.permutation.to_a
