const data = [{
        name: "TranQuocTam",
        age: 18,
        gender: "Nam-",

        lookingfor: "Thích giải ngân Hà ở thái nguyên, con hàng ở bình thuận đã bị loại bỏ",
        location: "Cuknia",
        image: "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277906251_685905512753123_8894363659408760853_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=9kmV9WS79h4AX_8CcGb&tn=QYDmofZRdmwEqGcC&_nc_ht=scontent.fdad3-4.fna&oh=03_AVKWpiNBab-ES5Subg-RWjxPex5E9hUZXAKyw2tZ25OqGw&oe=62726854"
    },
    {
        name: "LeDucTien",
        age: 18,
        gender: "Nam-",
        lookingfor: "Có người yêu không mới tên Nhi, hiện tại đang độc thân và cần tìm gấp em khác ",
        location: "Buonu",
        image: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/277844095_392632579033955_7638809554769664250_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=p70f8AMCgWIAX-PwUb3&_nc_ht=scontent-hkg4-2.xx&oh=03_AVLLuUUNuuVlPYuxyV4AMHDAm_qAIn8ePECF0TNeUC5o6A&oe=6272EECD"
    },
    {
        name: "PhamVanMinh",
        age: 18,
        gender: "Boy-",
        lookingfor: "Đang chiếm dữ và dấu vài em, dạo này đang thay đổi, trầm tính ...",
        location: "Buonu",
        image: "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277705821_686396125891093_8144777576885362296_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=MJJN7hUHCDAAX-kWqqq&_nc_ht=scontent.fdad3-4.fna&oh=03_AVKzuS2SCM9PTEXAuE0pqtI_MW3nyQ3jjDK289sp9T_ECA&oe=627244A0"
    },
    {
        name: "NguyenVanTrinh",
        age: 18,
        gender: "LoiKoXacDinh",
        lookingfor: "Tính tình thất thường, thích cho người khác leo cây,có vợ tên Nguyễn huyền",
        location: "Cuknia",
        image: "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/277714348_993552721301452_7397201868159567063_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=HA6PqHQx5GUAX-xFjIk&_nc_ht=scontent.fdad3-4.fna&oh=03_AVITNDbElTayJZ4AW_El3JztoL6_VvoeTgb-i6o_OV0QAQ&oe=62734DBD"
    },
    {
        name: "TranHanBuu",
        age: 18,
        gender: "Nam-",
        lookingfor: "Có 1 ước mơ cháy bỏng với nghành công an, các cô người yêu cũ thì vô số",
        location: "Dakrong",
        image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/277395365_322848686606284_2371835946921532898_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DQxHRu1zG-kAX_Mx_dq&_nc_ht=scontent-hkg4-1.xx&oh=03_AVJlcdAk46-0VeYmT-lLsiV8Vwq50xwXw-Ob4dQPWoE9rg&oe=62707DC7"
    },
    {
        name: "NongDucRuokThanh",
        age: 18,
        gender: "Boy-",
        lookingfor: "Fbi ngầm hay gì thì chưa xác định được, nói rất ít khi không nói nhiều",
        location: "Cuknia",
        image: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/277708003_738059737559495_3190934912132681883_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rG1x-iq71D0AX9HUhAf&_nc_ht=scontent-hkg4-1.xx&oh=03_AVJlpnx-__BkeWoLPUucgwqMgMqfimCq9tUvBHEArr9Dzg&oe=62711702"
    }



];


//Profile Iterator
const profiles = profileIterator(data);
nextProfile();
document.querySelector('#next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.querySelector('#profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Preferences: ${currentProfile.gender} Looking For ${currentProfile.lookingfor} </li>
        <li class="list-group-item">Location: ${currentProfile.location} </li>
    </ul>
    `;
        document.querySelector('#imageDisplay').innerHTML = `
    <img src=${currentProfile.image}>
    `
    } else {
        window.location.reload();
    }
}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    }
}