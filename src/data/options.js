const  options = [
    {
      label: '浙江',
      value: '浙江',
      children: [
        {
          label: '杭州',
          value: '杭州',
        },
        {
          label: '宁波',
          value: '宁波',
          children: [
            {
              label: '街道',
              value: '街道',
              children: [
                {
                  label: '小区1',
                  value: '小区1',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '江苏',
      value: '江苏',
      children: [
        {
          label: '南京',
          value: '南京',
        },
        {
          label: '苏州',
          value: '苏州',
          children: [
            {
              label: '街道',
              value: '街道',
              children: [
                {
                  label: '小区2',
                  value: '小区2',
                },
              ],
            },
          ],
        },
      ],
    },
]
  
export default options