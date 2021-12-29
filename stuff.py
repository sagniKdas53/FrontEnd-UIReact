#full = int(input())
chunk = 3#int(input())
string = "aababa"#input()
full = len(string)

hold = string[0:chunk]
diff=0
for i in range(chunk,full+1):
    Fstr = ''
    for j in range(i-3,i):
        Fstr += string[j]
    for char1,char2 in zip(Fstr,hold):
        if char1!=char2:
            diff+=1
    print(Fstr,diff)
    hold=Fstr

print(diff)
